import Image from 'next/image'

import styles from './card.module.css'

import card from './images/card.svg'
import bg1 from './images/vectors/Vector-1.svg'
import bg2 from './images/vectors/Vector-2.svg'
import bg3 from './images/vectors/Vector-3.svg'
import bg4 from './images/vectors/Vector-4.svg'
import bg5 from './images/vectors/Vector-5.svg'
import bg6 from './images/vectors/Vector-6.svg'
import bg7 from './images/vectors/Vector-7.svg'
import bg8 from './images/vectors/Vector-8.svg'
import bg9 from './images/vectors/Vector-9.svg'
import bg10 from './images/vectors/Vector-10.svg'
import bg11 from './images/vectors/Vector-11.svg'
import bg12 from './images/vectors/Vector-12.svg'
import bg13 from './images/vectors/Vector-13.svg'
import bg14 from './images/vectors/Vector-14.svg'
import bg15 from './images/vectors/Vector-15.svg'
import bg16 from './images/vectors/Vector-16.svg'
import bg17 from './images/vectors/Vector-17.svg'
import bg18 from './images/vectors/Vector-18.svg'
import bg19 from './images/vectors/Vector-19.svg'
import bg20 from './images/vectors/Vector-20.svg'
import bg21 from './images/vectors/Vector-21.svg'
import bg22 from './images/vectors/Vector-22.svg'
import bg23 from './images/vectors/Vector-23.svg'
import bg24 from './images/vectors/Vector-24.svg'

export const CardAnimation = () => {
  return (
  	<div className={styles.cardWrapper}>
	  	<Image className={styles.card} src={card} alt="Credit card"/>

		  <div className={styles.animationWrapper}>
		  	<Image src={bg1} alt="Credit card"/>
		  	<Image src={bg2} alt="Credit card"/>
		  	<Image src={bg3} alt="Credit card"/>
		  	<Image src={bg4} alt="Credit card"/>
		  	<Image src={bg5} alt="Credit card"/>
		  	<Image src={bg6} alt="Credit card"/>
		  	<Image src={bg7} alt="Credit card"/>
		  	<Image src={bg8} alt="Credit card"/>
		  	<Image src={bg9} alt="Credit card"/>
		  	<Image src={bg10} alt="Credit card"/>
		  	<Image src={bg11} alt="Credit card"/>
		  	<Image src={bg12} alt="Credit card"/>
		  	<Image src={bg13} alt="Credit card"/>
		  	<Image src={bg14} alt="Credit card"/>
		  	<Image src={bg15} alt="Credit card"/>
		  	<Image src={bg16} alt="Credit card"/>
		  	<Image src={bg17} alt="Credit card"/>
		  	<Image src={bg18} alt="Credit card"/>
		  	<Image src={bg19} alt="Credit card"/>
		  	<Image src={bg20} alt="Credit card"/>
		  	<Image src={bg21} alt="Credit card"/>
		  	<Image src={bg22} alt="Credit card"/>
		  	<Image src={bg23} alt="Credit card"/>
		  	<Image src={bg24} alt="Credit card"/>
		  </div>
		</div>
	)
}