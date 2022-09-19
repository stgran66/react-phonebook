import { Component } from 'react';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  onInputChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  resetForm = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form
        onSubmit={e => {
          this.props.onSubmit(e);
          this.resetForm();
        }}
      >
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={this.onInputChange}
          />
        </label>
        <br />
        <label>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={this.onInputChange}
          />
        </label>
        <br />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
