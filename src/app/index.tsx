import React, { useState } from 'react';
import {
  Button,
  Image,
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

// ── Cake data ──────────────────────────────────────────────────────────────
const CAKES = [
  {
    id: '1',
    name: 'Belgian Chocolate Cake',
    flavor: 'Chocolate',
    description: 'Rich, dense chocolate sponge layered with silky ganache and a dark cocoa glaze.',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&q=80',
  },
  {
    id: '2',
    name: 'Strawberry Vanilla Cake',
    flavor: 'Strawberry Vanilla',
    description: 'Light vanilla sponge stacked with fresh strawberries and whipped cream.',
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500&q=80',
  },
  {
    id: '3',
    name: 'Red Velvet Cake',
    flavor: 'Red Velvet',
    description: 'Classic crimson layers with a tangy cream-cheese frosting.',
    image: 'https://images.unsplash.com/photo-1586788680434-30d324b2d46f?w=500&q=80',
  },
  {
    id: '4',
    name: 'Lemon Drizzle Cake',
    flavor: 'Lemon',
    description: 'Zesty lemon sponge soaked in sharp citrus syrup and topped with icing.',
    image: 'https://images.unsplash.com/photo-1519869325930-281384150729?w=500&q=80',
  },
];

type Cake = (typeof CAKES)[number];

export default function ModalAndViewsScreen() {
  const [selectedCake, setSelectedCake] = useState<Cake | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = (cake: Cake) => {
    setSelectedCake(cake);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedCake(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>

        {/* ── Header ─────────────────────────────────────────────────── */}
        <Text style={styles.heading}>React Native — Modal & Views with Image</Text>
        <Text style={styles.subheading}>
          Components: View · Image · Modal
        </Text>

        <View style={styles.divider} />

        {/* ── Section 1: Image in a View ─────────────────────────────── */}
        <Text style={styles.sectionTitle}>Section 1 — Image inside a View</Text>
        <Text style={styles.note}>
          Each card below is a {'<View>'} containing an {'<Image>'} loaded from a remote URL,
          plus a {'<Button>'} that opens a {'<Modal>'}.
        </Text>

        <View style={styles.grid}>
          {CAKES.map((cake) => (
            <View key={cake.id} style={styles.card}>
              {/* Image component */}
              <Image
                source={{ uri: cake.image }}
                style={styles.cardImage}
                resizeMode="cover"
              />
              <View style={styles.cardBody}>
                <Text style={styles.cardName}>{cake.name}</Text>
                <Text style={styles.cardFlavor}>Flavor: {cake.flavor}</Text>
                <View style={styles.btnWrap}>
                  <Button title="View in Modal" onPress={() => openModal(cake)} />
                </View>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.divider} />

        {/* ── Section 2: Nested Views ────────────────────────────────── */}
        <Text style={styles.sectionTitle}>Section 2 — Nested Views demo</Text>
        <Text style={styles.note}>
          Views can be nested to build layouts. The box below uses nested {'<View>'}
          components with borders to show the structure.
        </Text>

        <View style={styles.outerBox}>
          <Text style={styles.boxLabel}>Outer View</Text>
          <View style={styles.middleBox}>
            <Text style={styles.boxLabel}>Middle View</Text>
            <View style={styles.innerBox}>
              <Text style={styles.boxLabel}>Inner View</Text>
            </View>
          </View>
        </View>

      </ScrollView>

      {/* ── Modal ──────────────────────────────────────────────────────── */}
      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
        onRequestClose={closeModal}
      >
        <View style={styles.overlay}>
          <View style={styles.modalCard}>
            {selectedCake && (
              <>
                <Text style={styles.modalTitle}>{selectedCake.name}</Text>
                <Text style={styles.modalFlavor}>Flavor: {selectedCake.flavor}</Text>

                {/* Large Image inside Modal */}
                <Image
                  source={{ uri: selectedCake.image }}
                  style={styles.modalImage}
                  resizeMode="cover"
                />

                <Text style={styles.modalDesc}>{selectedCake.description}</Text>

                <View style={styles.modalBtnWrap}>
                  <Button title="Close" color="#cc3333" onPress={closeModal} />
                </View>
              </>
            )}
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    padding: 16,
    maxWidth: 640,
    alignSelf: 'center',
    width: '100%',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  subheading: {
    fontSize: 13,
    color: '#555555',
    marginBottom: 8,
  },
  divider: {
    height: 1,
    backgroundColor: '#cccccc',
    marginVertical: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  note: {
    fontSize: 13,
    color: '#555555',
    marginBottom: 12,
  },

  // ── Card grid ──
  grid: {
    gap: 12,
  },
  card: {
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 6,
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: 160,
  },
  cardBody: {
    padding: 10,
    gap: 4,
  },
  cardName: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  cardFlavor: {
    fontSize: 13,
    color: '#555555',
  },
  btnWrap: {
    marginTop: 6,
  },

  // ── Nested Views ──
  outerBox: {
    borderWidth: 2,
    borderColor: '#0066cc',
    padding: 10,
    borderRadius: 4,
  },
  middleBox: {
    borderWidth: 2,
    borderColor: '#cc6600',
    padding: 10,
    marginTop: 8,
    borderRadius: 4,
  },
  innerBox: {
    borderWidth: 2,
    borderColor: '#008800',
    padding: 10,
    marginTop: 8,
    borderRadius: 4,
  },
  boxLabel: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333333',
  },

  // ── Modal ──
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalCard: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 20,
    maxWidth: 360,
    width: '100%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 2,
    textAlign: 'center',
  },
  modalFlavor: {
    fontSize: 13,
    color: '#555555',
    marginBottom: 12,
  },
  modalImage: {
    width: 280,
    height: 200,
    borderRadius: 6,
    marginBottom: 12,
  },
  modalDesc: {
    fontSize: 13,
    color: '#333333',
    textAlign: 'center',
    fontStyle: 'italic',
    marginBottom: 14,
  },
  modalBtnWrap: {
    width: '100%',
  },
});
