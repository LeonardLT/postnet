describe('postnet', function () {

    it('#1.checkBarcode', () => {
        let barcode = '|:::||::|:|::||::|::|:|:|:::|:|::||::|::|:|:|::::|||';
        let checkedBarcode = checkBarcode(barcode);
        let expected = {
            barcode: '|:::||::|:|::||::|::|:|:|:::|:|::||::|::|:|:|::::|||',
            type: true
        };
        expect(checkedBarcode).toEqual(expected);
    });

    it('#2-1.formatBarcode', () => {
        let checkedBarcode = {
            barcode: '|:::||::|:|::||::|::|:|:|:::|:|::||::|::|:|:|::::|||',
            type: true
        };
        let formattedBarcode = formatBarcode(checkedBarcode);
        let expected = ':::||::|:|::||::|::|:|:|:::|:|::||::|::|:|:|::::||';
        expect(formattedBarcode).toEqual(expected);
    });

    it('#2-2.buildBarcodeArray', () => {
        let formattedBarcode = ':::||::|:|::||::|::|:|:|:::|:|::||::|::|:|:|::::||';
        let barcodeArray = buildBarcodeArray(formattedBarcode);
        let expected = [':::||', '::|:|', '::||:', ':|::|', ':|:|:', '::|:|', '::||:', ':|::|', ':|:|:', ':::||'];
        expect(barcodeArray).toEqual(expected);
    });

    it('#2-3.matchZipcode', () => {
        let barcodeArray = [':::||', '::|:|', '::||:', ':|::|', ':|:|:', ':|:|:'];
        let allCodes = loadAllCodes();
        let zipcodeArray = matchZipcode(barcodeArray, allCodes);
        let expected = ['1', '2', '3', '4', '5', '5'];//[1, 2, 3, 4, 5, 5];
        expect(zipcodeArray).toEqual(expected);
    });

    it('#3.recheckZipcodeArray', () => {
        let zipcodeArray = ['1', '2', '3', '4', '5', '5'];//[1, 2, 3, 4, 5, 5];
        let recheckedZipcodeArray = recheckZipcodeArray(zipcodeArray);
        let expected = {
            zipcodeArray: ['1', '2', '3', '4', '5', '5'],//[1, 2, 3, 4, 5, 5],
            recheckType: true
        };
        expect(recheckedZipcodeArray).toEqual(expected);
    });
    it('#4.buildZipcode', () => {
        let recheckedZipcodeArray = ['1', '2', '3', '4', '5', '5','5','5','5','5'];
        let zipcode = buildZipcode(recheckedZipcodeArray);
        let expected = '12345-5555';
        expect(zipcode).toEqual(expected);


    })


});