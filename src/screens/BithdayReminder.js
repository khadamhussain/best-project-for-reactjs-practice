import React,{useState} from 'react';
import '../css/BithdayReminder.css';
import data from '../data/BirthdayReminder';
import List from '../components/birthdayReminder/List';
const BithdayReminder = () => {
    const [people, setPeople] = useState(data)
    return (
      <main>
        <section className='container'>
          <h3>{people.length} birthdays today</h3>
          <List people={people} />
          <button onClick={() => setPeople([])}>clear all</button>
        </section>
      </main>
  )
}

export default BithdayReminder