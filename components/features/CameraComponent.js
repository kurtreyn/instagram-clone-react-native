import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import { Divider } from 'react-native-elements';
import BottomTabs from '../home/BottomTabs';

import camera_icon from '../../assets/camera-icon.png';
import rotate_icon from '../../assets/rotate-icon.png';
const cameraIcon = Image.resolveAssetSource(camera_icon).uri;
const rotateIcon = Image.resolveAssetSource(rotate_icon).uri;

export default function CameraComponent() {
  const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [camera, setCamera] = useState(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === 'granted');
      const galleryStatus =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (galleryStatus.status !== 'granted') {
        alert('Sorry, we need camera roll permission to make this work');
      } else {
        setHasGalleryPermission(galleryStatus.status === 'granted');
      }
    })();
  }, []);

  const takePicture = async () => {
    if (camera) {
      const data = await camera.takePictureAsync(null);
      setImage(data.uri);
      //   console.log(data.uri);
    }
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  if (hasCameraPermission === null || hasGalleryPermission === false) {
    return <View />;
  }
  if (hasCameraPermission === false || hasGalleryPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.cameraContainer}>
        <Camera
          ref={(ref) => setCamera(ref)}
          style={styles.fixedRatioTag}
          type={type}
          ratio={'1:1'}
        />
      </View>
      <TouchableOpacity
        style={styles.rotateIconContainer}
        onPress={() => {
          setType(
            type === Camera.Constants.Type.back
              ? Camera.Constants.Type.front
              : Camera.Constants.Type.back
          );
        }}
      >
        <Image source={{ uri: rotateIcon }} style={{ width: 20, height: 20 }} />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.cameraIconContainer}
        onPress={() => takePicture()}
      >
        <Image source={{ uri: cameraIcon }} style={{ width: 60, height: 60 }} />
      </TouchableOpacity>

      <Button title="Select image from gallery" onPress={() => pickImage()} />
      {image && <Image source={{ uri: image }} style={{ flex: 1 }} />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  cameraContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  fixedRatioTag: {
    flex: 1,
    aspectRatio: 1,
  },
  cameraIconContainer: {
    backgroundColor: '#555',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: '18%',
    borderRadius: 50,
  },
  rotateIconContainer: {
    alignItems: 'flex-end',
    marginRight: 20,
  },
});
