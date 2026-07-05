import { LogoGithub } from 'framework7-icons-plus/react'
import Link from 'next/link'
import { useState } from 'react'
import type { WordSet } from '@/types/game'
import styles from './home.module.scss'

const Home = () => {
  const [wordSet, setWordSet] = useState<WordSet>('default')

  return (
    <div className={styles.home}>
      <div className={styles.top} />

      <div className={styles.middle}>
        <div className={styles.hero}>
          <h2 className={styles.titleEng}>Liar Game</h2>
          <h1 className={styles.title}>라이어 게임</h1>
        </div>
        <label className={styles.wordSetSelector}>
          <span>단어 세트</span>
          <select
            value={wordSet}
            onChange={(event) => {
              setWordSet(event.target.value as WordSet)
            }}
          >
            <option value="default">일반인 모드</option>
            <option value="league">League Keywords 모드</option>
          </select>
        </label>
        <Link href={{ pathname: '/room/create', query: { wordSet } }}>
          <button type="button">방 만들기</button>
        </Link>
        <Link href="/how-to-play">
          <button type="button" className="minimal">
            플레이 방법
          </button>
        </Link>
      </div>

      <div className={styles.bottom}>
        <a
          href="https://github.com/jhaemin/liar-game"
          target="_blank"
          rel="noreferrer"
        >
          <span className={styles.source}>
            <LogoGithub className={styles.icon} /> GitHub
          </span>
        </a>
      </div>
    </div>
  )
}

export default Home
