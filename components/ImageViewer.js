import { StyleSheet, Image } from "react-native";

export default function ImageViewer({placeholderImageSource, image}) {
    const imgSource = image ? {uri: image} : placeholderImageSource;
    return (
        <Image source={imgSource} style={styles.image} />
    )
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});