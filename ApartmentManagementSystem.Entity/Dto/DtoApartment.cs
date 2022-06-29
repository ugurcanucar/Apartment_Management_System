#nullable disable

using ApartmentManagementSystem.Entity.Base;

namespace ApartmentManagementSystem.Entity.Dto
{
    public  class DtoApartment : DtoBase
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int UserId { get; set; }
        public bool IsEmpty { get; set; }
        public int ApartmentTypeId { get; set; }
        public int BlockId { get; set; }
        public string Floor { get; set; }
        public string HomeNumber { get; set; }
 
    }
}
