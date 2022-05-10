// exports table
module.exports = (dbinfo, Sequelize) => {
    return dbinfo.define(
        "logement",
        {
            // field name
            idLogement: {
                // set date type
                type: Sequelize.DataTypes.INTEGER,
                // set primaryKey
                primaryKey: true,
                // set autoIncrement
                autoIncrement: true
            },
            //field name
            type_de_logement: {
                // set data type with max length
                type: Sequelize.DataTypes.STRING(45),
                // setting allowNull to false will add NOT NULL to the column, which means there will be an error if you don't add info in this column
                allowNull: false
            },
                  // field name
            superficie: {
                    // set date type
                    type: Sequelize.DataTypes.STRING(45),
                     // setting allowNull to false will add NOT NULL to the column, which means there will be an error if you don't add info in this column
                    allowNull: false
                },
            nombre_d_habitants: {
                // set date type
                type: Sequelize.DataTypes.INTEGER,
                 // setting allowNull to false will add NOT NULL to the column, which means there will be an error if you don't add info in this column
                allowNull: false
            },
            sans_enfant: {
                // set date type
                type: Sequelize.DataTypes.BOOLEAN,
                 // setting allowNull to false will add NOT NULL to the column, which means there will be an error if you don't add info in this column
                allowNull: false
            },
            sans_animal: {
                // set date type
                type: Sequelize.DataTypes.BOOLEAN,
                 // setting allowNull to false will add NOT NULL to the column, which means there will be an error if you don't add info in this column
                allowNull: false
            },
            acces_a_l_exterieur: {
                // set data type with max length 
                type: Sequelize.DataTypes.BOOLEAN,
                // setting allowNull to false will add NOT NULL to the column, which means there will be an error if you don't add info in this column
                allowNull: true
            }
           
        },
        {
            /**
             * By default, Sequelize will add the attributes createdAt and updatedAt to your model, so that you know when the database entry went into the db, and when it was last updated.
             */
            timestamps: true,
            /**
             * Sequelize allow setting underscored option for Model. When true this option will set the field option on all attributes to the underscored version of its name.
             * This also applies to foreign keys generated by associations.
             * */

            underscored: true
        }
    );
};

