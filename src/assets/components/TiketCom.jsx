     
       export const init = {
         tickets:[], 
        };

export function TiketCom(state , action){

  switch (action.type) {
    case "SETICKETS":
      return {
        ...state,
        tickets: action.payload,
      };

    case "add-ticket":
      return {
        ...state,
        tickets: [...state.tickets, action.payload]
      };

      default:
      return state;
    
    }
    

  }
