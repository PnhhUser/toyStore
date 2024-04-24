import { createContext, useContext, useEffect, useReducer } from "react";

const ACTION = {
  ADD: "ADD",
  DELETE: "DELETE",
  UPDATE: "UPDATE",
  LOADING_DATA: "LOADING_DATA",
};

export const ProductContext = createContext(null);

export const ProductDispatchContext = createContext(null);

export const ProductProvider = function ({ children }) {
  const [products, dispatch] = useReducer(productReducer, {
    init: [],
  });

  useEffect(() => {
    fetch("/api/product")
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: ACTION.LOADING_DATA,
          data: data,
        });
      });
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      <ProductDispatchContext.Provider value={dispatch}>
        {children}
      </ProductDispatchContext.Provider>
    </ProductContext.Provider>
  );
};

export function useProducts() {
  return useContext(ProductContext);
}

export function useProductDispatch() {
  return useContext(ProductDispatchContext);
}

function productReducer(data, action) {
  switch (action.type) {
    case ACTION.LOADING_DATA: {
      const { products } = action.data;
      return {
        init: [...products],
      };
    }
    default: {
      return null;
    }
  }
}
