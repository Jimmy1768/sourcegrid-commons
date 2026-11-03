import React from 'react';
import { StyleSheet } from 'react-native';
import { fireEvent, render, screen, within } from '@testing-library/react-native';

import { FractionBlock } from '../src/pictures/PictureWithAnswers';

const text = 'fraction circle\n1/4\n1/8';
const question = 'Which one is the quarter?';
const quarterDescription = 'a circle in 4 equal parts, 1 shaded';
const eighthDescription = 'a circle in 8 equal parts, 1 shaded';

describe('fraction pictures with answers', () => {
  it('shows fraction labels and screen-reader descriptions when there is no answer list', () => {
    render(<FractionBlock text={text} />);

    expect(screen.getAllByRole('image')).toHaveLength(2);
    expect(screen.getByRole('image', { name: quarterDescription })).toBeTruthy();
    expect(screen.getByRole('image', { name: eighthDescription })).toBeTruthy();
    expect(screen.getByText('1/4')).toBeTruthy();
    expect(screen.getByText('1/8')).toBeTruthy();
    expect(screen.queryAllByRole('button')).toHaveLength(0);
  });

  it('lets matching buttons label the pictures and leaves The quarter in the question row', () => {
    render(
      <FractionBlock
        text={text}
        question={question}
        choices={['1/4', '1/8', 'The quarter']}
      />,
    );

    expect(screen.getByText(question)).toBeTruthy();
    expect(screen.getByRole('image', { name: quarterDescription })).toBeTruthy();
    expect(screen.getByRole('image', { name: eighthDescription })).toBeTruthy();
    // Only the button's words remain: the separate picture label is gone.
    expect(screen.getAllByText('1/4')).toHaveLength(1);
    expect(screen.getAllByText('1/8')).toHaveLength(1);
    expect(screen.getByRole('button', { name: '1/4' }).props.accessibilityHint)
      .toBe(quarterDescription);
    expect(screen.getByRole('button', { name: '1/8' }).props.accessibilityHint)
      .toBe(eighthDescription);

    const row = within(screen.getByTestId('choice-row'));
    expect(row.getAllByRole('button')).toHaveLength(1);
    expect(row.getByRole('button', { name: 'The quarter' })).toBeTruthy();
    // Decorative arrows are deliberately hidden from screen readers.
    expect(screen.getByTestId('arrow-0', { includeHiddenElements: true })).toBeTruthy();
    expect(screen.getByTestId('arrow-1', { includeHiddenElements: true })).toBeTruthy();
    expect(screen.queryByTestId('arrow-2', { includeHiddenElements: true })).toBeNull();

    screen.getAllByRole('button').forEach((button) => {
      const style = StyleSheet.flatten(button.props.style);
      expect(style.width ?? style.minWidth).toBeGreaterThanOrEqual(48);
      expect(style.height ?? style.minHeight).toBeGreaterThanOrEqual(48);
    });
  });

  it('sends the original words of both callout and row buttons', () => {
    const onAnswer = jest.fn();
    render(
      <FractionBlock
        text={text}
        choices={['1/ 4', '1/8', 'The quarter']}
        onAnswer={onAnswer}
      />,
    );

    fireEvent.press(screen.getByRole('button', { name: '1/ 4' }));
    fireEvent.press(screen.getByRole('button', { name: 'The quarter' }));
    expect(onAnswer.mock.calls).toEqual([['1/ 4'], ['The quarter']]);
  });

  it('fades older answers, marks the picked button, and ignores further taps', () => {
    const onAnswer = jest.fn();
    const choices = ['1/4', '1/8', 'The quarter'];
    const view = render(
      <FractionBlock text={text} choices={choices} onAnswer={onAnswer} />,
    );
    const activeStyle = StyleSheet.flatten(
      screen.getByRole('button', { name: '1/8' }).props.style,
    );
    const unpickedStyle = StyleSheet.flatten(
      screen.getByRole('button', { name: '1/4' }).props.style,
    );

    view.rerender(
      <FractionBlock
        text={text}
        choices={choices}
        onAnswer={onAnswer}
        active={false}
        picked="1/4"
      />,
    );

    const picked = screen.getByRole('button', { name: '1/4' });
    expect(picked.props.accessibilityState).toMatchObject({ disabled: true, selected: true });
    const pickedStyle = StyleSheet.flatten(picked.props.style);
    expect(pickedStyle.backgroundColor).not.toBe(unpickedStyle.backgroundColor);
    expect(pickedStyle.borderWidth).toBeGreaterThan(unpickedStyle.borderWidth);

    ['1/8', 'The quarter'].forEach((words) => {
      const button = screen.getByRole('button', { name: words });
      expect(button.props.accessibilityState).toMatchObject({ disabled: true, selected: false });
      const style = StyleSheet.flatten(button.props.style);
      expect(style.opacity).toBeGreaterThan(0);
      expect(style.opacity).toBeLessThan(activeStyle.opacity);
      fireEvent.press(button);
    });
    fireEvent.press(picked);
    expect(onAnswer).not.toHaveBeenCalled();
  });

  it.each([
    'fraction circle\nnot a fraction',
    'fraction circle\n1/13',
    'fraction circle\n5/4',
    'fraction unknown\n1/4',
  ])('shows an unreadable block as text, keeping its answers usable: %s', (source) => {
    const onAnswer = jest.fn();
    render(
      <FractionBlock text={source} choices={['The quarter']} onAnswer={onAnswer} />,
    );

    expect(screen.getByText(source, { normalizer: (value) => value })).toBeTruthy();
    expect(screen.queryAllByRole('image')).toHaveLength(0);
    fireEvent.press(screen.getByRole('button', { name: 'The quarter' }));
    expect(onAnswer).toHaveBeenCalledTimes(1);
    expect(onAnswer).toHaveBeenCalledWith('The quarter');
  });
});
