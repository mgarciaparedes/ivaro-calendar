import { useDispatch, useSelector } from "react-redux";
import {
    onGetStockEvent, onChangeStockEvent
} from "../store/stock/stockSlice";

export const useStockStore = () => {
  const dispatch = useDispatch();

  const { stock } = useSelector((state) => state.stock);

  const getStockEvent = () => {
    dispatch( onGetStockEvent() );
  };

  const changeStockEvent = () => {
    dispatch( onChangeStockEvent() );
  };

  return {
    //Properties
    stock,

    //Métodos
    getStockEvent,
    changeStockEvent
  };
};
