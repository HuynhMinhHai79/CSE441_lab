const styles = {
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'flex-end', // Đưa các nút xuống cuối màn hình
    padding: 50, // Thêm lề ngang
    paddingBottom: 30, // Khoảng cách từ dưới lên
  },
  displayContainer: {
    height: 120,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 15,
    backgroundColor: '#ffffff',
    marginBottom: 20, // Khoảng cách giữa màn hình và các nút
  },
  display: {
    fontSize: 50,
    color: '#000',
  },
  buttonsContainer: {
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Đảm bảo các nút cách đều nhau
    marginBottom: 15, // Khoảng cách giữa các hàng
  },
  button: {
    backgroundColor: 'white',
    width: 80, // Giảm kích thước nút cho hợp lý
    height: 65,
    borderRadius: 50, // Bo góc vừa với kích thước mới
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    fontSize: 40, // Giảm kích thước chữ cho cân đối
    color: '#000',
  },
  operation: {
    color: '#ffa500', // Thay đổi màu nền cho nút phép toán
  },
};
export default styles;
