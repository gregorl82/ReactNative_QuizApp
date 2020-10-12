import React from 'react'
import { View } from 'react-native'
import { QuestionDisplay } from './QuestionDisplay'
import { AnswerDisplay } from './AnswerDisplay'
import { QuestionWithAnswers } from '../screens/GameScreen'

interface QuestionProps {
    question: QuestionWithAnswers
    handlePress: (text: string) => void
}

export const Question: React.FC<QuestionProps> = ({
    question,
    handlePress,
}) => {
    return (
        <View>
            <QuestionDisplay questionText={question.question} />
            {question.answers.map((answer, index) => {
                return (
                    <AnswerDisplay
                        key={index}
                        answerText={answer}
                        handlePress={handlePress}
                        answered={question.answered}
                    />
                )
            })}
        </View>
    )
}
