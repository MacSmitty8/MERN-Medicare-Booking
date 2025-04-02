import {faqs} from './../../assets/data/faqs'
import FAQItem from './FAQItem'

const FAQList = () => {
  return (
    <ul className='mt-[38px]'>
      {faqs.map((item,index) => 
      <FAQItem item={item} 
      key={index} />)}
    </ul>
  )
}

export default FAQList
