import React from 'react';
import styles from './controls.css';

export function Controls() {
  return (
    <div className={styles.controls}>
      <div className={styles.karmaCounter}>
        <button className={styles.up}>
          <svg fill="none" height="15" viewBox="0 0 15 15" width="15" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.93189 1.24806C7.84228 1.09446 7.67783 1 7.5 1C7.32217 1 7.15772 1.09446 7.06811 1.24806L0.0681106 13.2481C-0.0220988 13.4027 -0.0227402 13.5938 0.0664289 13.749C0.155598 13.9043 0.320967 14 0.5 14H14.5C14.679 14 14.8444 13.9043 14.9336 13.749C15.0227 13.5938 15.0221 13.4027 14.9319 13.2481L7.93189 1.24806Z" fill="#888888"/>
          </svg>
        </button>
        <span className={styles.karmaValue}>234</span>
        <button className= {styles.down}>
          <svg className= {styles.down} fill="none" height="15" viewBox="0 0 15 15" width="15" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.93189 1.24806C7.84228 1.09446 7.67783 1 7.5 1C7.32217 1 7.15772 1.09446 7.06811 1.24806L0.0681106 13.2481C-0.0220988 13.4027 -0.0227402 13.5938 0.0664289 13.749C0.155598 13.9043 0.320967 14 0.5 14H14.5C14.679 14 14.8444 13.9043 14.9336 13.749C15.0227 13.5938 15.0221 13.4027 14.9319 13.2481L7.93189 1.24806Z" fill="#888888"/>
          </svg>
        </button>
      </div>
      <button className={styles.commentsButton}>
        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="15px" height="17px">
          <path d="M20,5c0-0.55-0.45-1-1-1H5C4.45,4,4,4.45,4,5v14c0,0.55,0.45,1,1,1l11.7,0.03l-0.22-0.93L20,21.96V5z M13.8,14c-0.99,0-1.8-0.9-1.8-2c0,1.1-0.81,2-1.8,2s-1.8-0.9-1.8-2c0-1.1,0.81-2,1.8-2s1.8,0.9,1.8,2c0-1.1,0.81-2,1.8-2	s1.8,0.9,1.8,2C15.6,13.1,14.79,14,13.8,14z" opacity=".35"/><path fill="none" stroke="#888888" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" d="M16.48,19.097l0.216,0.93	L5,20c-0.552,0-1-0.448-1-1V5c0-0.552,0.448-1,1-1h14c0.552,0,1,0.448,1,1v16.955L16.48,19.097z"/><path d="M17,14.005c-1.176,1.344-2.956,1.352-2.956,1.352l-0.368-0.492c0.376-0.129,0.698-0.296,1.028-0.551l-0.07-0.203	c-0.615,0.28-1.404,0.446-2.634,0.446s-2.019-0.165-2.634-0.446l-0.07,0.203c0.329,0.254,0.651,0.421,1.028,0.551l-0.368,0.492	c0,0-1.78-0.008-2.956-1.352c0.2-3.276,1.364-4.952,1.364-4.952s0.98-0.772,2.272-0.896l0.251,0.51	c0.37-0.064,0.763-0.11,1.113-0.11c0.339,0,0.732,0.05,1.109,0.119l0.255-0.519c1.232,0.092,2.272,0.896,2.272,0.896	S16.8,10.729,17,14.005z M11,12c0-0.552-0.36-1-0.8-1c-0.44,0-0.8,0.448-0.8,1s0.36,1,0.8,1C10.64,13,11,12.552,11,12z M14.6,12	c0-0.552-0.36-1-0.8-1c-0.44,0-0.8,0.448-0.8,1s0.36,1,0.8,1C14.24,13,14.6,12.552,14.6,12z"/>
        </svg>
        <span className={styles.commentsNumber}>13</span>
      </button>

      <div className={styles.actions}>
        <button className={styles.sharedButton}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#888888" viewBox="0 0 18 16">
            <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z"/>
          </svg>
        </button>

        <button className={styles.savedButton}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" fill="#888888"  viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM8.146 4.992c.961 0 1.641.633 1.729 1.512h1.295v-.088c-.094-1.518-1.348-2.572-3.03-2.572-2.068 0-3.269 1.377-3.269 3.638v1.073c0 2.267 1.178 3.603 3.27 3.603 1.675 0 2.93-1.02 3.029-2.467v-.093H9.875c-.088.832-.75 1.418-1.729 1.418-1.224 0-1.927-.891-1.927-2.461v-1.06c0-1.583.715-2.503 1.927-2.503Z"/>
          </svg>
        </button>
      </div>

    </div>

  );
}
