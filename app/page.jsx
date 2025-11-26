export default function Home() {
  return (
    <div className="pixel-container">
      <header className="pixel-header">
        <h1 className="pixel-title">PIXEL ◈ WAGER</h1>
        <div className="pixel-subtitle">Ставки на киберспорт</div>
      </header>

      <main className="pixel-main">
        <div className="pixel-card">
          <h2>Сейчас в эфире</h2>
          <div className="match-list">
            <div className="pixel-match">
              <span>NAVI vs FAZE</span>
              <div className="odds">
                <button className="pixel-btn">1.85</button>
                <button className="pixel-btn">2.10</button>
              </div>
            </div>
            <div className="pixel-match">
              <span>G2 vs VITALITY</span>
              <div className="odds">
                <button className="pixel-btn">1.95</button>
                <button className="pixel-btn">1.90</button>
              </div>
            </div>
          </div>
        </div>

        <button className="pixel-cta">
          Начать делать ставки
        </button>
      </main>

      <div className="pixel-whisper">
        // Левиафан наблюдает...
      </div>
    </div>
  )
}
