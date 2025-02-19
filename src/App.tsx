import React from "react";
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet, Font } from "@react-pdf/renderer";

// 日本語フォントの登録
Font.register({
  family: "NotoSansJP",
  src: "/fonts/NotoSansJP-Regular.ttf",
  fontWeight: "normal",
  fontStyle: "normal",
  onLoad: () => console.log("Font loaded successfully"),
  onError: (err: any) => console.error("Font loading failed", err),
});

// PDF styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    padding: 20,
    fontFamily: "NotoSansJP",
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  table: {
    display: "flex",
    width: "100%",
    border: "1px solid #000",
    marginBottom: 10,
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#f0f0f0",
    borderBottom: "1px solid #000",
  },
  tableRow: {
    flexDirection: "row",
    borderBottom: "1px solid #000",
  },
  tableCell: {
    flex: 1,
    padding: 5,
    fontSize: 12,
    textAlign: "center",
  },
});

const users = [
  { id: 1, name: "山田 太郎", age: 28, email: "taro@example.com" },
  { id: 2, name: "佐藤 花子", age: 32, email: "hanako@example.com" },
  { id: 3, name: "田中 一郎", age: 45, email: "ichiro@example.com" },
];

// PDF document
const MyDocument: React.FC = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.title}>ユーザーリスト</Text>
      <View style={styles.table}>
        <View style={styles.tableHeader}>
          <Text style={styles.tableCell}>ID</Text>
          <Text style={styles.tableCell}>名前</Text>
          <Text style={styles.tableCell}>年齢</Text>
          <Text style={styles.tableCell}>メールアドレス</Text>
        </View>
        {users.map((user) => (
          <View key={user.id} style={styles.tableRow}>
            <Text style={styles.tableCell}>{user.id}</Text>
            <Text style={styles.tableCell}>{user.name}</Text>
            <Text style={styles.tableCell}>{user.age}</Text>
            <Text style={styles.tableCell}>{user.email}</Text>
          </View>
        ))}
      </View>
    </Page>
  </Document>
);

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>PDF download</h1>

      {/* PDF Download Link */}
      <PDFDownloadLink document={<MyDocument />} fileName="example.pdf">
        {({ loading }) => (loading ? "PDF生成中..." : <button>Download PDF</button>)}
      </PDFDownloadLink>
    </div>
  );
};

export default App;
