import React, {RefObject, useRef, useState} from 'react';
import {
  TextInput,
  TextInputProps,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Text from '../Text';
import styles from './styles';

interface Props extends TextInputProps {
  label?: string;
  inputRef?: RefObject<TextInput>;
  type?: 'date';
}

const Input = (props: Props) => {
  const {label, type} = props;
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = props.inputRef ?? useRef<TextInput>(null);

  const hasValue = !!props.value;

  return (
    <TouchableWithoutFeedback
      disabled={type === 'date' ? true : false}
      onPress={() => inputRef?.current?.focus()}>
      <View
        style={[
          styles.root,
          isFocused ? styles.rootFocused : null,
          hasValue ? {backgroundColor: '#F5F6F7'} : null,
          props.style,
          props.multiline
            ? {
                height: 100,
                alignItems: 'flex-start',
              }
            : null,
        ]}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          {label && (
            <View
              style={[
                styles.labelWrapper,
                hasValue ? styles.labelWrapperActive : {},
              ]}>
              <Text
                style={[
                  styles.label,
                  hasValue ? styles.labelActive : {},
                  isFocused ? styles.labelFocused : {},
                ]}>
                {label}
              </Text>
            </View>
          )}

          <TextInput
            {...props}
            ref={inputRef}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            style={[
              styles.input,
              hasValue ? styles.inputActive : null,
              props.multiline ? {height: 'auto', maxHeight: 76} : null,
            ]}
            editable={type === 'date' ? false : true}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Input;
