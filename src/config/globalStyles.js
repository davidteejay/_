import { StyleSheet } from 'react-native'

const globalStyles = StyleSheet.create({
  shadow: {
    shadowColor: '#00000082',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 3,
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    width: '100%',
    marginBottom: 20,
  },
  modalCover: {
    flex: 1,
    backgroundColor: '#0005',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  modal: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 20,
    maxHeight: '85%',
  },
  modalContent: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'transparent',
    width: '100%',
  },
  closeModal: {
    alignItems: 'flex-end',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  underline: {
    marginVertical: 20,
    backgroundColor: '#ccc',
    height: 1,
    width: '100%',
  },
})

export default globalStyles
