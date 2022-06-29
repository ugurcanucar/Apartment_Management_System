using ApartmentManagementSystem.Entity.Base;

#nullable disable

namespace ApartmentManagementSystem.Entity.Dto
{
    public class DtoBillType : DtoBase
    {
        public DtoBillType()
        {

         }

        public int Id { get; set; }
        public string Name { get; set; }

     }
}
