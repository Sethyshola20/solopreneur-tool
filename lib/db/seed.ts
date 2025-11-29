import { db } from './drizzle';
import { clients, devis, devisItems, factures, facturesItems, recettes, settings } from './schema';
import {
    mockClients,
    mockDevis,
    mockDevisItems,
    mockFactures,
    mockFacturesItems,
    mockRecettes,
    MOCK_USER_ID,
} from './mock-data';

async function seed() {
    console.log('🌱 Starting database seeding...\n');

    try {
        // 1. Insert Clients
        console.log('📋 Inserting clients...');
        await db.insert(clients).values(mockClients);
        console.log(`✅ Inserted ${mockClients.length} clients\n`);

        // 2. Insert Devis
        console.log('📄 Inserting devis...');
        await db.insert(devis).values(mockDevis);
        console.log(`✅ Inserted ${mockDevis.length} devis\n`);

        // 3. Insert Devis Items
        console.log('📝 Inserting devis items...');
        await db.insert(devisItems).values(mockDevisItems);
        console.log(`✅ Inserted ${mockDevisItems.length} devis items\n`);

        // 4. Insert Factures
        console.log('🧾 Inserting factures...');
        await db.insert(factures).values(mockFactures);
        console.log(`✅ Inserted ${mockFactures.length} factures\n`);

        // 5. Insert Factures Items
        console.log('📋 Inserting factures items...');
        await db.insert(facturesItems).values(mockFacturesItems);
        console.log(`✅ Inserted ${mockFacturesItems.length} factures items\n`);

        // 6. Insert Recettes
        console.log('💰 Inserting recettes...');
        await db.insert(recettes).values(mockRecettes);
        console.log(`✅ Inserted ${mockRecettes.length} recettes\n`);


        console.log('🎉 Database seeding completed successfully!');
        console.log('\n📊 Summary:');
        console.log(`   - ${mockClients.length} clients`);
        console.log(`   - ${mockDevis.length} devis with ${mockDevisItems.length} items`);
        console.log(`   - ${mockFactures.length} factures with ${mockFacturesItems.length} items`);
        console.log(`   - ${mockRecettes.length} recettes`);
        console.log('   - 1 settings entry');
        console.log(`\n⚠️  Note: Make sure to update MOCK_USER_ID in lib/db/mock-data.ts with your actual user ID!`);
        console.log(`   Current MOCK_USER_ID: ${MOCK_USER_ID}`);

    } catch (error) {
        console.error('❌ Error seeding database:', error);
        throw error;
    }
}

// Run the seed function
seed()
    .then(() => {
        console.log('\n✨ Seeding script finished');
        process.exit(0);
    })
    .catch((error) => {
        console.error('\n💥 Seeding script failed:', error);
        process.exit(1);
    });
