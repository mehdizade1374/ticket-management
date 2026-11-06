     
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

    default:
      return state;
    }

}
