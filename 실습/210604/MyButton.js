import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';

const MyButton = () => {
  return (
    // Pressable을 이용해서도 동일하게 구현이 가능함.
    <TouchableOpacity onPress={() => alert('MyButton')}
    // hitSlop={{bottom: 100, top: 100, left: 100, right:100}}
    pressRetentionOffset={{bottom: 10,top: 10, left:10, right: 10}}
    // pressRetentionOffest은 버튼 잘 못눌렀을 때 옆으로가면 취소되는 기능
    >
    {/* margin은 실제 공간차지, hitslop은 실제 공간차지는 하지 않음 */}
      <View style={{backgroundColor: 'red', padding: 10, margin: 100 }}>
        <Text style={{fontSize: 20, color: 'white'}}>MyButton</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MyButton;