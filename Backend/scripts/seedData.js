const { sequelize } = require('../config/database');
const { User, RoleCategory, Role, UserRole } = require('../models');

const seedData = async () => {
  try {
    console.log('🌱 Starting data seeding...');
    
    await sequelize.sync({ force: true });
    console.log('✅ Database synced');
    
    const adminUser = await User.create({
      FirstName: 'System',
      FatherName: 'Administrator',
      GrandFatherName: 'Admin',
      Email: 'admin@gmail.com',
      UserName: 'admin',
      Phone: '1234567890',
      password: 'Admin@123',
      CreatedBy: null,
      IsArchived: false
    });
    console.log('✅ Admin user created:', adminUser.Email);
    
    const categories = await RoleCategory.bulkCreate([
      {
        CategoryName: 'Executive Management',
        Description: 'Top-level management roles',
        CreatedBy: adminUser.Id
      },
      {
        CategoryName: 'Middle Management',
        Description: 'Department and unit heads',
        CreatedBy: adminUser.Id
      },
      {
        CategoryName: 'Operational',
        Description: 'Front-line staff and team members',
        CreatedBy: adminUser.Id
      },
      {
        CategoryName: 'Technical',
        Description: 'Technical and specialist roles',
        CreatedBy: adminUser.Id
      }
    ]);
    console.log('✅ Role categories created');
    
    const executiveCategory = categories[0];
    const middleCategory = categories[1];
    const operationalCategory = categories[2];
    const technicalCategory = categories[3];
    
    const roles = await Role.bulkCreate([
      {
        RoleCategoryId: executiveCategory.Id,
        RoleName: 'Chief Executive Officer (CEO)',
        Description: 'Overall strategic leadership',
        HasExtraMeasures: true,
        CreatedBy: adminUser.Id
      },
      {
        RoleCategoryId: executiveCategory.Id,
        RoleName: 'Chief Operations Officer (COO)',
        Description: 'Oversee daily operations',
        HasExtraMeasures: true,
        CreatedBy: adminUser.Id
      },
      {
        RoleCategoryId: executiveCategory.Id,
        RoleName: 'Chief Financial Officer (CFO)',
        Description: 'Financial strategy and management',
        HasExtraMeasures: true,
        CreatedBy: adminUser.Id
      },
      {
        RoleCategoryId: middleCategory.Id,
        RoleName: 'Department Director',
        Description: 'Department leadership',
        HasExtraMeasures: true,
        CreatedBy: adminUser.Id
      },
      {
        RoleCategoryId: middleCategory.Id,
        RoleName: 'Unit Manager',
        Description: 'Unit supervision',
        HasExtraMeasures: false,
        CreatedBy: adminUser.Id
      },
      {
        RoleCategoryId: operationalCategory.Id,
        RoleName: 'Team Leader',
        Description: 'Team coordination',
        HasExtraMeasures: false,
        CreatedBy: adminUser.Id
      },
      {
        RoleCategoryId: operationalCategory.Id,
        RoleName: 'Staff Member',
        Description: 'Regular staff duties',
        HasExtraMeasures: false,
        CreatedBy: adminUser.Id
      },
      {
        RoleCategoryId: technicalCategory.Id,
        RoleName: 'Senior Developer',
        Description: 'Technical leadership',
        HasExtraMeasures: true,
        CreatedBy: adminUser.Id
      },
      {
        RoleCategoryId: technicalCategory.Id,
        RoleName: 'Junior Developer',
        Description: 'Development support',
        HasExtraMeasures: false,
        CreatedBy: adminUser.Id
      },
      {
        RoleCategoryId: technicalCategory.Id,
        RoleName: 'System Administrator',
        Description: 'System maintenance',
        HasExtraMeasures: true,
        CreatedBy: adminUser.Id
      }
    ]);
    console.log('✅ Roles created');
    
    const ceoRole = roles.find(r => r.RoleName === 'Chief Executive Officer (CEO)');
    const directorRole = roles.find(r => r.RoleName === 'Department Director');
    const unitManagerRole = roles.find(r => r.RoleName === 'Unit Manager');
    const teamLeaderRole = roles.find(r => r.RoleName === 'Team Leader');
    const staffRole = roles.find(r => r.RoleName === 'Staff Member');
    
    if (directorRole && ceoRole) {
      await directorRole.update({ ParentRoleId: ceoRole.Id });
    }
    
    if (unitManagerRole && directorRole) {
      await unitManagerRole.update({ ParentRoleId: directorRole.Id });
    }
    
    if (teamLeaderRole && unitManagerRole) {
      await teamLeaderRole.update({ ParentRoleId: unitManagerRole.Id });
    }
    
    if (staffRole && teamLeaderRole) {
      await staffRole.update({ ParentRoleId: teamLeaderRole.Id });
    }
    
    console.log('✅ Role hierarchy established');
    
    const adminRole = roles.find(r => r.RoleName === 'System Administrator');
    if (adminRole) {
      await UserRole.create({
        UserId: adminUser.Id,
        RoleId: adminRole.Id,
        FromDate: new Date(),
        ToDate: null,
        CreatedBy: adminUser.Id
      });
      console.log('✅ Admin role assigned to admin user');
    }
    
    console.log('\n🎉 Seeding completed successfully!');
    console.log('\n📝 Default Login Credentials:');
    console.log('   Email: admin@kpi-system.com');
    console.log('   Username: admin');
    console.log('   Password: Admin@123');
    console.log('\n⚠️  Please change the admin password after first login!\n');
    
    process.exit(0);
    
  } catch (error) {
    console.error('❌ Seeding error:', error);
    process.exit(1);
  }
};

seedData();