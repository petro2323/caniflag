type Card = {
  title: string
  description: string
  imageUrl: string
  onGameStart: () => void
}

const GameCard = ({ title, description, imageUrl, onGameStart }: Card) => {
  return (
    <>
    <div className="card hover:bg-[#1e2d45] transition cursor-pointer" style={styles.card} onClick={() => onGameStart()}>
      {imageUrl && <img src={imageUrl} alt={title} style={styles.image} />}
      <div style={styles.body}>
        <h2 style={styles.title}>{title}</h2>
        <p style={styles.text}>{description}</p>
      </div>
    </div>
    </>
  );
};

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    maxWidth: '300px',
    margin: '0 auto',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
  },
  image: {
    width: '100%',
    height: '160px',
    objectFit: 'contain' as const,
    borderRadius: '4px'
  },
  body: {
    paddingTop: '12px'
  },
  title: {
    fontSize: '1.25rem',
    margin: '0 0 8px'
  },
  text: {
    fontSize: '1rem',
    color: '#555'
  }
};

export default GameCard;
