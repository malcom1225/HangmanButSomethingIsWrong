import styles from "./HangmanLynch.module.css"

const HEAD = (<div key="head" className={styles.head}/>)
const BODY= (<div key="body" className={styles.body}/>)
const LEFT_ARM = (<div key="leftarm" className={styles.leftarm}/>)
const RIGHT_ARM = <div key="rightarm" className={styles.rightarm} />;
const LEFT_LEG = (<div key="leftleg" className={styles.leftleg}/>)
const RIGHT_LEG = (<div key="rightleg" className={styles.rightleg}/>)

const HANG_MAN_BODY = [HEAD,BODY,LEFT_ARM,RIGHT_ARM,LEFT_LEG,RIGHT_LEG]

interface HangmanLynchProps{
  entryNumber?: number;
}

const HangmanLynch = ({entryNumber}: HangmanLynchProps) => {



  return(
    <div className={styles.hangmanlynch}>
      {HANG_MAN_BODY.slice(0, entryNumber)}
      <div className={styles.hangerclip}></div>
      <div className={styles.hanger}></div>
      <div className={styles.pillar}></div>
      <div className={styles.ground}></div>
    </div>
  );
};

export default HangmanLynch;