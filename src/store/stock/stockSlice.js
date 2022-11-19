import { createSlice } from "@reduxjs/toolkit";

export const stockSlice = createSlice({
  name: "stock",
  initialState: {
    stock: {
      juegos_inflables: {
        colores: 1,
        verde: 1,
        castillo: 1,
        princesa: 1,
        pequeno: 1,
      },
      juegos_salon: {
        mesas_hockey: 5,
        mesas_tacataca: 5,
        arcade_basquet: 5,
        arcade_maquina: 5,
        mesas_pool: 5,
      },
      camas_elasticas: {
        grande: 1,
        pequena: 1,
      },
    },
  },
  reducers: {
    onGetStockEvent: (state) => {
      return state.stock;
    },
    onChangeStockEvent: (state) => {
      state.stock = {
        juegos_inflables: {
          colores: 0,
          verde: 0,
          castillo: 0,
          princesa: 1,
          pequeno: 1,
        },
        juegos_salon: {
          mesas_hockey: 5,
          mesas_tacataca: 4,
          arcade_basquet: 3,
          arcade_maquina: 2,
          mesas_pool: 1,
        },
        camas_elasticas: {
          grande: 0,
          pequena: 1,
        },
      };
    },
  },
});

export const { onGetStockEvent, onChangeStockEvent } = stockSlice.actions;
