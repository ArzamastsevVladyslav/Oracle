module.exports = {
	createSchema: 'CREATE USER${ifNotExists} ${schemaName} NO AUTHENTICATION',

    comment: '\nCOMMENT ON ${object} ${objectName} IS ${comment};\n',

	createTable:
		'CREATE${tableType} TABLE${ifNotExists} ${name}\
        ${tableProps}\
        \n${options}',

	createTableProps: '${columnDefinitions}${keyConstraints}${checkConstraints}${foreignKeyConstraints}',

	columnDefinition: '${name}${type}${default}${encrypt}${constraints}',

	createKeyConstraint: '${constraintName}${keyType}${columns}${options}',

	createForeignKeyConstraint:
		'${name} FOREIGN KEY (${foreignKey}) REFERENCES ${primaryTable} (${primaryKey})${onDelete}',

	checkConstraint: '${name}CHECK (${expression})',

	createForeignKey:
		'ALTER TABLE ${foreignTable} ADD CONSTRAINT ${name} FOREIGN KEY (${foreignKey}) REFERENCES ${primaryTable} (${primaryKey})${onDelete};',

	createIndex: `CREATE$\{indexType} INDEX$\{ifNotExists}$\{name} ON $\{tableName}$\{keys}$\{options};`,

	createView:
		'CREATE${orReplace}${force}${viewType}${materialized} VIEW${ifNotExists} ${name} ${sharing}${viewProperties}\n\tAS ${selectStatement}',

	viewSelectStatement: 'SELECT ${keys}\n\tFROM ${tableName}',

	createObjectType: 'CREATE OR REPLACE TYPE ${name} AS OBJECT \n(\n\t${properties}\n);\n',

	objectTypeColumnDefinition: '${name} ${type}',

	createCollectionType:
		'CREATE OR REPLACE TYPE ${name} IS ${collectionType}${size} OF (${datatype})${notPersistable};\n',

	ifNotExists:
		"DECLARE\nBEGIN\n\tEXECUTE IMMEDIATE '${statement}';\n\tEXCEPTION WHEN OTHERS THEN\n\t\tIF SQLCODE = -${errorCode} THEN NULL; ELSE RAISE; END IF;\nEND;\n/\n",

	createSynonym: 'CREATE${orReplace}${editionable}${public} SYNONYM ${name}\n\tFOR ${objectName};\n',

	renameColumn: 'ALTER TABLE ${tableName} RENAME COLUMN ${oldColumnName} TO ${newColumnName};',

	dualityView: {
		createJsonRelationalDualityViewHeading: 'CREATE${orReplaceStatement}${forceStatement}${editionableStatement} JSON RELATIONAL DUALITY VIEW ${viewName} AS',

		sql: {
			tableTagsStatement: 'WITH${checkStatement}${etagStatement}${insertStatement}${updateStatement}${deleteStatement}',

			columnTagsStatement: 'WITH${checkStatement}${etagStatement}${updateStatement}',

			fromTableStatement: 'FROM ${tableName}${tableAlias}${tableTagsStatement}'
		}
	}
};
