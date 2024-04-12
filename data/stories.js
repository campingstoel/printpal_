import { imageStore } from "../auth/store";

export default function StoriesList() {
  const {images} = imageStore.useState();

const storiesData = [

    {
        id: 1,
        title: "Find printshops easier",
        description: "Take a look on the map",
        image: {
          uri: images.find((image) => image.includes("map"))
        
        },
        onPress: "Map",
        active : true
    },
    {
        id: 2,
        title: "How PrintSafe",
        description: "We have a secure payment system",
        image: {
            uri: images.find((image) => image.includes("secure"))
        },
        onPress: "Story",
        active : true
    },
]

return storiesData;
}

