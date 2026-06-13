import { Helmet } from "react-helmet";

const Privacy = () => {
    return (
        <div style={{ 
            maxWidth: '800px', 
            margin: '40px auto', 
            padding: '20px', 
            color: '#e0e0e0', 
            textAlign: 'left',
            lineHeight: '1.6'
        }}>
            <Helmet>
                <title>Privacy Policy | CanIFlag?</title>
            </Helmet>
            
            <h1 style={{ color: '#fff', borderBottom: '1px solid #333', paddingBottom: '10px' }}>Privacy Policy for CanI<span className="text-red-400">Flag</span><span className="text-yellow-400">?</span></h1>
            <p style={{ color: '#888', fontSize: '0.9rem' }}>Last updated: June 2026</p>
            
            <p style={{ fontSize: '1.1rem', margin: '20px 0' }}>
                Your privacy is extremely important to us. The short story is simple: <strong>We do not collect, store, share, or track any of your personal data.</strong>
            </p>
            
            <h3 style={{ color: '#fff', marginTop: '30px' }}>1. No Data Collection</h3>
            <ul style={{ paddingLeft: '20px', margin: '10px 0' }}>
                <li style={{ marginBottom: '8px' }}><strong>No User Accounts:</strong> You do not need to register, log in, or create a profile to play the flag-guessing game.</li>
                <li style={{ marginBottom: '8px' }}><strong>No Databases:</strong> Your scores, streaks, and gameplay statistics are processed strictly in your local browser session and are not saved on any server.</li>
                <li style={{ marginBottom: '8px' }}><strong>No Cookies:</strong> We do not use tracking cookies, marketing cookies, or targeted advertising.</li>
            </ul>
            
            <h3 style={{ color: '#fff', marginTop: '30px' }}>2. Hosting and Infrastructure</h3>
            <p>This application is hosted using <strong>GitHub Pages</strong>.</p>
            <ul style={{ paddingLeft: '20px', margin: '10px 0' }}>
                <li style={{ marginBottom: '8px' }}>Like almost all hosting platforms, GitHub may automatically collect standard server log data (such as your IP address, browser type, and time of visit) purely for security, performance optimization, and network infrastructure maintenance.</li>
                <li style={{ marginBottom: '8px' }}>This data is handled entirely by GitHub in accordance with their privacy standards and is not accessible or managed by us.</li>
            </ul>
            
            <h3 style={{ color: '#fff', marginTop: '30px' }}>3. Contact Us</h3>
            <p>If you have any questions about this minimalist Privacy Policy, feel free to reach out via the Contact link available in the footer of this website.</p>
        </div>
    );
}

export default Privacy;