import {describe, expect, test, vi} from 'vitest';
import {fireEvent, render, screen} from '@testing-library/react';
import Button from './Button';

describe("Button test", () => {
  test("should show title all the time", () => {
    render(<Button type='primary' size="sm" disabled={false}>Help</Button>);
    const button = screen.getByText('Help');
    expect(button).toBeDefined();
  })

  test("should execute function onClick", () => {
    const onClickResult = vi.fn(() => 20);
    render(<Button onClick={onClickResult} type='primary' size="sm">Help</Button>);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(onClickResult).toHaveBeenCalled();
    expect(onClickResult).toHaveReturnedWith(20);
  })

  test("should not execute when disabled", () => {
    const onClickResult = vi.fn(() => 20);
    render(<Button onClick={onClickResult} type='primary' size="sm" disabled={true}>Help</Button>);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(onClickResult).not.toHaveBeenCalled();
  })
})

