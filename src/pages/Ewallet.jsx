import { useDispatch, useSelector } from "react-redux";
import { deleteCard, toggleActive,  } from "../redux/cardSlice";
import "./ewallet.css";


const Ewallet = () => {
  const creditCard = useSelector((state) => state.cardInfo.cardInformation);

  const defaultCardName = useSelector(
(state) => state.cardInfo.cardInformation[0].cardName,
 )

  const dispatch = useDispatch()

  const toggleActiveHandler = (index) => {
    dispatch(toggleActive(index))
  };

  const deleteHandler = (index) => {
    console.log(creditCard)
    
    
   
    if (creditCard.length > 1) {
      if (creditCard[index].cardStateActive === false) {
        dispatch(deleteCard(index))
      } if (creditCard[index].cardStateActive === true) {
        alert('Du kan inte ta bort ett aktivt kort!')
      }
    } else {
      alert('Du måste ha minst ett kort!')
    }


  }



  return (
    <div className="cards-container">
      <h1 >CURRENT CARDS</h1>
      
      <ul >
        {creditCard.map((credit, index) => {
          return (
            <li
              key={index}
              className={
                credit.cardStateActive ? 'active' : 'inactive'
              }
            >
             
             <div
                className={
                  credit.cardStateActive
                    ? 'active'
                    : 'inactive'
                }
                onClick={() => {
                  toggleActiveHandler(index)
                }}
              >
                 <div className="credit-card">
                <div className="credit-card__logo">{credit.bankName}</div>

                <div className="credit-card__number">{credit.cardNumber}</div>
                <span className="credit-ccv">{credit.ccv}</span>
                <div className="credit-card__info">
                  <div className="credit-card__info_name">
                    <div className="credit-card__info_label">CARDHOLDER'S NAME
</div>
                    <div value={defaultCardName}>
                      {defaultCardName.toLocaleUpperCase()}
                    </div>
                  </div>

                  <div className="credit-card__info_expiry">
                    <div className="credit-card__info_label">VALID UP TO</div>
                    <div>
                      {' '}
                      {credit.cardMonth} / {credit.cardYear}
                    </div>
                  </div>
                </div>
              </div>
              <button className="delBtn" onClick={() => deleteHandler(index)}>
                {' '}
                Ta bort kort
              </button>
            </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Ewallet;


