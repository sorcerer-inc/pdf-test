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
  section: {
    margin: 10,
    padding: 10,
  },
});

// PDF document
const MyDocument: React.FC = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>これは PDF ドキュメント</Text>
      </View>
      <View style={styles.section}>
        <Text>@react-pdf/renderer を使用している</Text>
      </View>
    </Page>
  </Document>
);

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>PDF download</h1>

      <PDFDownloadLink document={<MyDocument />} fileName="example.pdf">
        {({ loading }) => (loading ? "PDF生成中..." : <button>download PDF</button>)}
      </PDFDownloadLink>
    </div>
  );
};

export default App;
