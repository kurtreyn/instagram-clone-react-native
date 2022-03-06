import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import * as Yup from 'yup';
import { Formik } from 'formik';

const uploadPostSchema = Yup.object().shape({
  imageUrl: Yup.string().url().required('A URL is required'),
  caption: Yup.string().max(2200, 'Caption has reached the character limit'),
});

const PLACEHOLDER_IMG =
  'https://www.brownweinraub.com/wp-content/uploads/2017/09/placeholder.jpg';

const FormicPostUploader = () => {
  const [thumbnailUrl, setThumbnail] = useState(PLACEHOLDER_IMG);

  return (
    <Formik
      initialValues={{ caption: '', imageUrl: '' }}
      onSubmit={(values) => console.log(values)}
      validationSchema={uploadPostSchema}
    >
      {({ handleBlur, handleChange, handleSubmit, values, erros, isValid }) => (
        <>
          <View>
            <Image
              source={{ uri: PLACEHOLDER_IMG }}
              style={{ width: 100, height: 100 }}
            />

            <TextInput
              placeholder="Write a caption..."
              placeholderTextColor="gray"
            />
            <TextInput
              placeholder="Enter Image URL"
              placeholderTextColor="gray"
            />
          </View>
        </>
      )}
    </Formik>
  );
};

export default FormicPostUploader;

const styles = StyleSheet.create({});
