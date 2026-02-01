import { getActiveProducts, getMRRProducts, getAffiliateProducts } from "../../../lib/products-helper";


export default async function TestPage() {
  // Alle Produkte holen
  const allProducts = await getActiveProducts();
  const mrrProducts = await getMRRProducts();
  const affiliateProducts = await getAffiliateProducts();

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '2rem' }}>🧪 Products Test Page</h1>

      {/* Statistik */}
      <div style={{ marginBottom: '2rem', padding: '1rem', background: '#f0f0f0', borderRadius: '8px' }}>
        <h2>📊 Statistik:</h2>
        <p>Gesamt: {allProducts.length} Produkte</p>
        <p>MRR: {mrrProducts.length} Produkte</p>
        <p>Affiliate: {affiliateProducts.length} Produkte</p>
      </div>

      {/* Alle Produkte */}
      <div style={{ marginBottom: '2rem' }}>
        <h2>📦 Alle Produkte ({allProducts.length}):</h2>
        <pre style={{ 
          background: '#1e1e1e', 
          color: '#d4d4d4', 
          padding: '1rem', 
          borderRadius: '8px', 
          overflow: 'auto',
          fontSize: '12px'
        }}>
          {JSON.stringify(allProducts, null, 2)}
        </pre>
      </div>

      {/* MRR Produkte */}
      <div style={{ marginBottom: '2rem' }}>
        <h2>💎 MRR Produkte ({mrrProducts.length}):</h2>
        <pre style={{ 
          background: '#1e1e1e', 
          color: '#14B8A6', 
          padding: '1rem', 
          borderRadius: '8px', 
          overflow: 'auto',
          fontSize: '12px'
        }}>
          {JSON.stringify(mrrProducts, null, 2)}
        </pre>
      </div>

      {/* Affiliate Produkte */}
      <div style={{ marginBottom: '2rem' }}>
        <h2>🤝 Affiliate Produkte ({affiliateProducts.length}):</h2>
        <pre style={{ 
          background: '#1e1e1e', 
          color: '#F59E0B', 
          padding: '1rem', 
          borderRadius: '8px', 
          overflow: 'auto',
          fontSize: '12px'
        }}>
          {JSON.stringify(affiliateProducts, null, 2)}
        </pre>
      </div>

      {/* Einzelne Produkt-Karten (Quick Preview) */}
      <div>
        <h2>🎨 Quick Preview:</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1rem' }}>
          {allProducts.map(product => (
            <div 
              key={product.id} 
              style={{ 
                border: '1px solid #ddd', 
                borderRadius: '8px', 
                padding: '1rem',
                background: product.tag === 'mrr' ? '#f0fdf4' : '#fffbeb'
              }}
            >
              <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>{product.product_name}</h3>
              <p style={{ fontSize: '0.875rem', color: '#666', marginBottom: '0.5rem' }}>
                {product.tag.toUpperCase()} • {product.price} {product.currency}
              </p>
              <p style={{ fontSize: '0.75rem', color: '#999' }}>
                ID: {product.product_id}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}