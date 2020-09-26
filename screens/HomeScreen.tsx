import React, { useState, useEffect } from "react";
import { AppLoading } from "expo";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-community/picker";
import { useFonts, FugazOne_400Regular } from "@expo-google-fonts/fugaz-one";

interface Category {
  id: string;
  name: string;
}

export const HomeScreen = () => {
  let [fontsLoaded] = useFonts({ FugazOne_400Regular });

  const [showMessage, setShowMessage] = useState<boolean>(false);
  const [categories, setCategories] = useState<Category[]>();
  const [selectedCategory, setSelectedCategory] = useState<string | number>("");
  const [numberOfQuestions, setNumberOfQuestions] = useState<string | number>(
    "0"
  );

  useEffect(() => {
    fetch("https://opentdb.com/api_category.php")
      .then((res) => res.json())
      .then((data) => {
        const categories = data.trivia_categories;
        const sortedCategories = categories.sort((a: any, b: any) => {
          const nameA = a.name.toUpperCase();
          const nameB = b.name.toUpperCase();

          if (nameA < nameB) {
            return -1;
          }

          if (nameA > nameB) {
            return 1;
          }

          return 0;
        });

        setCategories(sortedCategories);
      });
  }, []);

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Qwizzr</Text>
        <View style={styles.pickerContainer}>
          <Text style={styles.labelText}>Category:</Text>
          <Picker
            style={styles.picker}
            selectedValue={selectedCategory}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedCategory(itemValue)
            }
          >
            <Picker.Item key={0} label={""} value={""} />
            {categories &&
              categories.map((category) => {
                return (
                  <Picker.Item
                    key={category.id}
                    label={category.name}
                    value={category.id}
                  />
                );
              })}
          </Picker>
        </View>

        <View style={styles.pickerContainer}>
          <Text style={styles.labelText}>Questions:</Text>
          <Picker
            style={styles.picker}
            selectedValue={numberOfQuestions}
            onValueChange={(itemValue, itemIndex) =>
              setNumberOfQuestions(itemValue)
            }
          >
            <Picker.Item label="5" value="5" />
            <Picker.Item label="10" value="10" />
            <Picker.Item label="15" value="15" />
          </Picker>
        </View>

        <TouchableOpacity onPress={() => setShowMessage(true)}>
          <Text style={styles.button}>START</Text>
        </TouchableOpacity>
        {showMessage && (
          <>
            <Text>Lets go!</Text>
            <TouchableOpacity onPress={() => setShowMessage(false)}>
              <Text style={styles.button}>RESET</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffe6f4",
    alignItems: "center",
    justifyContent: "center",
  },
  pickerContainer: {
    alignItems: "baseline",
  },
  titleText: {
    fontFamily: "FugazOne_400Regular",
    fontSize: 50,
    padding: 50,
  },
  labelText: {
    fontFamily: "Roboto",
    padding: 5,
    fontSize: 20,
    fontWeight: "bold",
  },
  picker: {
    height: 50,
    width: 200,
    marginBottom: 20,
    backgroundColor: "#fff",
    fontFamily: "Roboto",
  },
  button: {
    padding: 15,
    backgroundColor: "#488687",
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
    borderRadius: 5,
    width: 100,
    textAlign: "center",
  },
});
