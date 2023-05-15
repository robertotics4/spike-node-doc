export type ContactProps = {
  type: 'mail' | 'phone';
  content: string;
};

export class Contact {
  type: 'mail' | 'phone';

  content: string;

  constructor({ type, content }: ContactProps) {
    this.type = type;
    this.content = content;
  }
}
