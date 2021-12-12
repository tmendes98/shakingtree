import React, { useCallback, useState } from "react";
import "./App.css";
import TreeComponent from "./components/tree";
import AppleComponent from "./components/apple";
import BasketComponent from "./components/basket";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { addApple, resetApple } from "./store/actions/appleAction";
import { ShakingTreeState } from "./constants";
import { getRandomInt, timeout } from "./helpers";

function App() {
  const [shakeTree, setShakeTree] = useState<boolean>(false);
  const [dropApple, setDropApple] = useState<boolean>(false);
  const [isShaking, setIsShaking] = useState<boolean>(false);

  const dispatch: Dispatch<any> = useDispatch();

  const increaseAppleCount = useCallback(
    () => dispatch(addApple()),
    [dispatch]
  );

  const resetAppleCount = useCallback(() => dispatch(resetApple()), [dispatch]);

  const appleCount: number = useSelector(
    (state: ShakingTreeState) => state.appleCount,
    shallowEqual
  );

  const animate = async () => {
    resetAppleCount();
    setShakeTree(true);
    setIsShaking(true);
    // ağaç sallandıktan 3 sn sonra tekrar state false konumuna çekiliyor
    setTimeout(() => setShakeTree(false), 3000);
    //diğer fonksiyonlar art arda çalışmaması için süre girildi.
    await timeout(3000);
    let appleCount = getRandomInt(5);

    for (let index = 0; index < appleCount; index++) {
      let appleDropDelay = getRandomInt(3) + 1;
      await timeout(1700 * appleDropDelay);
      appleDrop(index);
    }
    await timeout(2700);
    setIsShaking(false);
  };

  const appleDrop = async (index: number) => {
    setDropApple(true);
    setTimeout(() => setDropApple(false), 1700);
    setTimeout(() => increaseAppleCount(), 2700);
  };

  return (
    <div className="App">
      <TreeComponent className={shakeTree ? "shake" : "no-shake"} />
      <AppleComponent
        className={dropApple ? "apple" : "no-apple"}
        style={{ left: 325 + getRandomInt(30) * 5 }}
      />
      <BasketComponent className="basket" appleCount={appleCount} />
      <button className="shake-button" onClick={animate} disabled={isShaking}>
        Shake Tree
      </button>
    </div>
  );
}

export default App;
