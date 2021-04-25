import { useState } from "react";
import "../../src/styles/global.scss";
import { Header } from "../components/Header/Index";
import { Player } from "../components/Player/Index";
import { PlayerContext, PlayerContextProvider } from "../contexts/PlayerContext";
import styles from '../styles/app.module.scss';
function MyApp({ Component, pageProps }) {

  return( 
    <PlayerContextProvider>
      <div className={styles.wrapper}>
        <main>
          <Header/>
          <Component {...pageProps} />
        </main>
        <Player/>
      </div>
    </PlayerContextProvider> 
  );
}

export default MyApp
