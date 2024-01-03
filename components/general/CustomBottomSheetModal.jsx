import { StyleSheet, Text, View } from "react-native";
import React, { useMemo, forwardRef, useCallback } from "react";
import { BottomSheetModal, BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import Colours from "../../Shared/Colours";

const CustomBottomSheetModal = forwardRef((props, ref) => {
  const { children } = props;
  const snapPoints = useMemo(() => ["80%"], []);

  const renderBackdrop = useCallback(
    (props) => (
      <BottomSheetBackdrop
        {...props}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
      />
    ),
    []
  );

  return (
    <BottomSheetModal
      ref={ref}
      snapPoints={snapPoints}
      handleIndicatorStyle={{ backgroundColor: Colours.icon }}
      enablePanDownToClose={true}
      backdropComponent={renderBackdrop}
      backgroundStyle={{ backgroundColor: Colours.background }}
    >
      <View style={styles.contentContainer}>{children}</View>
    </BottomSheetModal>
  );
});

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    backgroundColor: Colours.background,
  },
});

export default CustomBottomSheetModal;
