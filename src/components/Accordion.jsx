
import { Accordion } from 'flowbite-react';

function Accordionn() {
  return (
    <Accordion>
      <Accordion.Panel>
        <Accordion.Title className='p-3'>Chapter 1</Accordion.Title>
        <Accordion.Content className='p-3'>
          <ul className='text-white accordion-list'>
            <li>Episode-1-Introduction</li>
            <li>Episode-2-Installation and Setup</li>
          </ul>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className='p-3'>Chapter 1</Accordion.Title>
        <Accordion.Content className='p-3'>
          <ul className='text-white accordion-list'>
            <li>Episode-1-Introduction</li>
            <li>Episode-2-Installation and Setup</li>
          </ul>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className='p-3'>Chapter 1</Accordion.Title>
        <Accordion.Content className='p-3'>
          <ul className='text-white accordion-list'>
            <li>Episode-1-Introduction</li>
            <li>Episode-2-Installation and Setup</li>
          </ul>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
}

export default Accordionn;
