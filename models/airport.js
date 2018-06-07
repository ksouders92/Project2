module.exports = function(sequelize, DataTypes) {
    var Airport = sequelize.define("Airport", {
     
      st: DataTypes.STRING(45),
      st_abr: DataTypes.STRING(5),
      airport_name: DataTypes.STRING(100),
      IATA: DataTypes.STRING(6),
      pre_dom: DataTypes.STRING(20),
      pre_int: DataTypes.STRING(20),
    },
{
    timestamps: false,
    tableName: 'airport'
});

  
    return Airport;
  };