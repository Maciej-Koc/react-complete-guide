import './ExpensiveItem.css'

export default function ExpenseItem() {
  return (
    <div className='expense-item'>
      <div >April 7 2022</div>
      <div className='expense-item__description'>
        <h2 >Car Insurance</h2>
        <div  className='expense-item__price'>$155</div>
      </div>
    </div>
  );
}
