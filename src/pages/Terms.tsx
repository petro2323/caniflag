import { Helmet } from "react-helmet";

const Terms = () => {
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
                <title>Terms & Conditions | CanIFlag?</title>
            </Helmet>

            <h1 style={{ color: '#fff', borderBottom: '1px solid #333', paddingBottom: '10px' }}>Terms and Conditions for CanI<span className="text-red-400">Flag</span><span className="text-yellow-400">?</span></h1>
            <p style={{ color: '#888', fontSize: '0.9rem' }}>Last updated: June 2026</p>
            
            <p style={{ fontSize: '1.1rem', margin: '20px 0' }}>
                Welcome to CanI<span className="text-red-400">Flag</span><span className="text-yellow-400">?</span>. By accessing and using this website, you agree to comply with and be bound by the following simple terms. If you do not agree, please do not use the site.
            </p>
            
            <h3 style={{ color: '#fff', marginTop: '30px' }}>1. Use of the Service</h3>
            <ul style={{ paddingLeft: '20px', margin: '10px 0' }}>
                <li style={{ marginBottom: '8px' }}><strong>Purpose:</strong> This website is a free, web-based geography quiz built for entertainment.</li>
                <li style={{ marginBottom: '8px' }}><strong>Fair Use:</strong> You agree to use this website fairly. Any attempts to disrupt the website's performance, spam the server infrastructure, or reverse-engineer malicious activity are strictly prohibited.</li>
            </ul>
            
            <h3 style={{ color: '#fff', marginTop: '30px' }}>2. Intellectual Property & Disclaimer</h3>
            <ul style={{ paddingLeft: '20px', margin: '10px 0' }}>
                <li style={{ marginBottom: '8px' }}><strong>Content Accuracy:</strong> While we strive to keep the flag graphics and country data accurate, we are not liable for any historical or geographical inaccuracies within the game.</li>
                <li style={{ marginBottom: '8px' }}><strong>Assets:</strong> The country flags used in this game belong to their respective nations. The "404 Not Found" coat of arms belongs to the fictional Republic of Not Found.</li>
            </ul>
            
            <h3 style={{ color: '#fff', marginTop: '30px' }}>3. Limitation of Liability</h3>
            <p>This application is provided on an "as-is" and "as-available" basis without any warranties. The developer is not responsible for any technical issues, browser crashes, or the sudden urge to memorize every flag in the world.</p>
            
            <h3 style={{ color: '#fff', marginTop: '30px' }}>4. Changes to Terms</h3>
            <p>We reserve the right to modify these terms at any time. Any updates will be posted directly on this page with an updated modification date.</p>
        </div>
    );
}

export default Terms;