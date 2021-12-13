export class ParquetReader {
    metadata: MetadataInterface;

    envelopeReader: ParquetEnvelopeReader;

    schema: ParquetSchema;

    static openFile(filePath: string): Promise<ParquetReader>;

    constructor(metadata: MetadataInterface, envelopeReader: ParquetEnvelopeReader);

    getCursor(columnList?: string[][] | string[]): ParquetCursor;

    getRowCount(): Int64;

    getSchema(): ParquetSchema;

    getMetadata(): {
        [key: string]: string;
    };

    close(): Promise<void>;
}

export class ParquetCursor {
    metadata: MetadataInterface;

    envelopeReader: ParquetEnvelopeReader;

    schema: ParquetSchema;

    columnList: string[][] | string[];

    rowGroup: RowInterface[];

    rowGroupIndex: number;

    constructor(
        metadata: MetadataInterface,
        envelopeReader: ParquetEnvelopeReader,
        schema: ParquetSchema,
        columnList: string[][] | string[],
    );

    next(): Promise<RowInterface>;

    rewind(): void;
}

export interface RowInterface {
    [key: string]: ScalarType | ArrayType | RowInterface | RowInterface[];
}

export type ScalarType = boolean | number | string | Date;

export type ArrayType = boolean[] | number[] | string[] | Date[];

