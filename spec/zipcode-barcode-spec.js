var zipToBarcode = require('../src/zipcode-barcode');

var allCodes = require('../src/codes');

describe('zipcode-barcode', function () {

    it('zipcode to barcode', () => {
        let zipcode = '12345';
        let barcode = zipToBarcode.zipcodeToBarcode(zipcode);
        let expected = {
            barcode: '|:::||::|:|::||::|::|:|:|::|:|:|',
            type: true
        };
        expect(barcode).toEqual(expected);
    });

    it('#5.checkZipcode with 5-4 codes', () => {
        let zipcode = '45056-1234';
        let checkedZipcode = zipToBarcode.checkZipcode(zipcode);
        let expected = {
            zipcode: '45056-1234',
            type: true
        };
        expect(checkedZipcode).toEqual(expected);

    });

    it('#5.1.checkZipcode with 5 codes', () => {
        let zipcode = '45056';
        let checkedZipcode = zipToBarcode.checkZipcode(zipcode);
        let expected = {
            zipcode: '45056',
            type: true
        };
        expect(checkedZipcode).toEqual(expected);

    });
    it('#6.zipcodeTransformToBarcode', () => {
        let checkedZipcode = {
            zipcode: '12345',
            type: true
        };
        //let allCodes = loadAllCodes();
        let barcodeArray = zipToBarcode.zipcodeTransformToBarcode(checkedZipcode);
        let expected = [':::||', '::|:|', '::||:', ':|::|', ':|:|:', ':|:|:'];
        expect(barcodeArray).toEqual(expected);
    });

    it('#6-1.formatZipcode with 5-4 codes', () => {
        let checkedZipcode = {
            zipcode: '45056-1234',
            type: true
        };
        let formattedZipcode = zipToBarcode.formatZipcode(checkedZipcode);
        let expected = '450561234';
        expect(formattedZipcode).toEqual(expected);

    });
    it('#6-1.1.formatZipcode with 5 codes', () => {
        let checkedZipcode = {
            zipcode: '45056',
            type: true
        };
        let formattedZipcode = zipToBarcode.formatZipcode(checkedZipcode);
        let expected = '45056';
        expect(formattedZipcode).toEqual(expected);

    });

    it('#6-2.buildZipcodeArray', () => {
        let formattedZipcode = '450561234';
        let zipcodeArray = zipToBarcode.buildZipcodeArray(formattedZipcode);
        let expected = ['4', '5', '0', '5', '6', '1', '2', '3', '4'];
        expect(zipcodeArray).toEqual(expected);
    })


    it('#6-3.addCheckDigit', () => {
        let zipcodeArray = ['1', '2', '3', '4', '5'];
        let zipcodeArrayWithCheckDigit = zipToBarcode.addCheckDigit(zipcodeArray);
        let expected = ['1', '2', '3', '4', '5', '5'];
        expect(zipcodeArrayWithCheckDigit).toEqual(expected);
    });

    it('#6-4.matchBarcode', () => {
        let zipcodeArrayWithCheckDigit = ['1', '2', '3', '4', '5', '5'];
        // let allCodes = loadAllCodes();
        let barcodeArray = zipToBarcode.matchBarcode(zipcodeArrayWithCheckDigit, allCodes());
        let expected = [':::||', '::|:|', '::||:', ':|::|', ':|:|:', ':|:|:'];
        expect(barcodeArray).toEqual(expected);
    })

    it('#7.buildBarcode', () => {
        let barcodeArray = [':::||', '::|:|', '::||:', ':|::|', ':|:|:', ':|:|:'];
        let barcode = zipToBarcode.buildBarcode(barcodeArray);
        let expected = '|:::||::|:|::||::|::|:|:|::|:|:|';
        expect(barcode).toEqual(expected);
    })
});

