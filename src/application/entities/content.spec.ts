import { Content } from './content';

describe('Content', () => {
  it('it should be able to create a notification content', () => {
    const content = new Content('Você recebeu uma notificação de amizade');

    expect(content).toBeTruthy();
  });

  it('it should not be able to create a notification content with less than 5 characters', () => {
    expect(() => new Content('yes')).toThrow();
  });

  it('it should not be able to create a notification content with less than 240 characters', () => {
    expect(() => new Content('y'.repeat(241))).toThrow();
  });
});
