using ApartmentManagementSystem.Entity.Base;

#nullable disable

namespace ApartmentManagementSystem.Entity.Models
{
    public class Apartment : EntityBase
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int UserId { get; set; }
        public bool IsEmpty { get; set; }
        public int ApartmentTypeId { get; set; }
        public int BlockId { get; set; }
        public string Floor { get; set; }
        public string HomeNumber { get; set; }

        public virtual ApartmentType ApartmentType { get; set; }
        public virtual Block Block { get; set; }
        public virtual User User { get; set; }
    }
}
