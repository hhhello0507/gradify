import React, {useEffect, useState} from 'react';
import {StyleSheet, ScrollView, Text} from "react-native";
import GradientItem from "./GradientItem.tsx";
import gradients from "../gradient_data.json";
import {Gradient} from "../type/Gradient.ts";

const MainPage = () => {

    const [data, setData] = useState<Gradient[]>([]);

    useEffect(() => {
        setData(gradients);
    }, []);
    return (
        <ScrollView>
            {data.map(e => (
                <GradientItem gradient={e}/>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({})

export default MainPage;
