export default function Contact() {
  return (
    <div style={{ maxWidth: '500px', margin: '50px auto', padding: '20px', backgroundColor: 'white', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '20px', color: '#333' }}>Contact Me</h1>
      <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Name</label>
          <input 
            type="text" 
            style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }}
            placeholder="Your name"
          />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Email</label>
          <input 
            type="email" 
            style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }}
            placeholder="your.email@example.com"
          />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Message</label>
          <textarea 
            rows="4"
            style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }}
            placeholder="Your message here..."
          ></textarea>
        </div>
        <button 
          type="submit"
          style={{ padding: '12px 20px', backgroundColor: '#0070f3', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
